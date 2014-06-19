package tutorial.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Created by leituo56 on 6/18/14.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Page {

    private String name;
    private String about;
    private int likes;
    private String phone;
    private String website;

    public String getName() {
        return name;
    }

    public int getLikes() {
        return likes;
    }
    public String getAbout() {
        return about;
    }

    public String getPhone() {
        return phone;
    }

    public String getWebsite() {
        return website;
    }

}
