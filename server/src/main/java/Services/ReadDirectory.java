package Services;

import java.io.File;
import java.io.IOException;


public class ReadDirectory {
    public String[] getPhotos() throws IOException {
        File[] fList;
        File F = new File("E:/УЧЕБА/Учеба 3 курс/server/src/main/resources/gym");
        fList = F.listFiles();
        if (fList != null) {
            String[] fls = new String[fList.length];
            for (int i = 0; i < fList.length; i++) {
                if (fList[i].isFile()) {
                    fls[i] = fList[i].getName();
                }
            }
            return fls;
        }
        return null;
    }
}
