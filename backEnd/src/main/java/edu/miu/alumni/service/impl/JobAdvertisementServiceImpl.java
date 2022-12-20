package edu.miu.alumni.service.impl;

import edu.miu.alumni.dto.JobAdvertisementDto;
import edu.miu.alumni.entity.*;
import edu.miu.alumni.model.SearchJobRequest;
import edu.miu.alumni.repository.JobAdvertisementRepository;
import edu.miu.alumni.repository.UserRepository;
import edu.miu.alumni.service.JobAdvertisementService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobAdvertisementServiceImpl
        extends BasicServiceImpl<JobAdvertisement, JobAdvertisementDto,Long, JobAdvertisementRepository>
        implements JobAdvertisementService<JobAdvertisement, JobAdvertisementDto,Long> {

    @Autowired
    private UserRepository userRepository;
    public JobAdvertisementServiceImpl(JobAdvertisementRepository repository, ModelMapper modelMapper) {
        super(repository, modelMapper);
    }

    @Override
    public List<JobAdvertisementDto> searchJob(SearchJobRequest sj) {
        var  byContidtions = repository.findByContidtions(
                sj.getCompanyName(), sj.getCityCode(), sj.getState()
        );

        var filterAds = new ArrayList<JobAdvertisement>();
        if(sj.getTags()!=null){
            List<Long> tagsIds = sj.getTags();
            for(JobAdvertisement jt:byContidtions){
                List<Long> collect = jt.getTags().stream().map(x -> x.getId()).collect(Collectors.toList());
                for(Long adsT:collect){
                    if(tagsIds.contains(adsT)){
                        filterAds.add(jt);
                    }
                }
            }
        }else{
            filterAds = byContidtions;
        }

        return   filterAds.stream()
                .map(x -> {
            return modelMapper.map(x, JobAdvertisementDto.class);
        }).collect(Collectors.toList());


    }

    @Override
    public List<JobAdvertisementDto> getCurUserAllPosted() {
        JobAdvertisementRepository repository1 = repository;
        String name = SecurityContextHolder.getContext().getAuthentication().getName();

        User userByEmailEquals = userRepository.findUserByEmailEquals(name);

       return repository1.getAllByPoster(userByEmailEquals.getId()).stream().map(x->
             modelMapper.map(x,JobAdvertisementDto.class)
        ).collect(Collectors.toList());
    }

    @Override
    public List<JobAdvertisementDto> getTop10LatestAdvertisement() {
        return repository.findTop10JobAd().stream().map(x->
            modelMapper.map(x,JobAdvertisementDto.class)
        ).collect(Collectors.toList());
    }


}
