package site.bitinit.pnd.web.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author gn.binarybei
 * @date 2022/9/15
 * @note
 */
@Slf4j
@Controller
public class HomeController {

    @GetMapping("/home")
    public ModelAndView home() {
        ModelAndView view = new ModelAndView();
        view.setViewName("home.html");
        return view;
    }
}
