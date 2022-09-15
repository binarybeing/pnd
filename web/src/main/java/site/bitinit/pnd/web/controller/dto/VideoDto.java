package site.bitinit.pnd.web.controller.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * @author gn.binarybei
 * @date 2022/9/15
 * @note
 */
@Setter
@Getter
public class VideoDto {
    private Long fileId;
    private String vedioName;
    private String coverUrl;
    private String streamUrl;
}
