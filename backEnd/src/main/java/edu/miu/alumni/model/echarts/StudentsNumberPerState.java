package edu.miu.alumni.model.echarts;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StudentsNumberPerState {
    private String stateCode;
    private long studentNumber;
}
