package Main.Controllers;



import Services.ReadDirectory;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;
import java.util.List;

@RestController
public class GreetingController {
    @RequestMapping(value="/getPhotos", produces="application/json")
    public String[] getPhotos() throws IOException{
        ReadDirectory readDirectory=new ReadDirectory();
        return readDirectory.getPhotos();
    }
}
