package tutorial.domain;

import org.springframework.web.multipart.MultipartFile;

/**
 * Created by leituo56 on 7/30/14.
 */
public class Person {
    private String name;
    private String ssn;
    private String gender;
    private MultipartFile file;

    public Person() {
    }

    public Person(String name) {
        this.name = name;
    }

    public Person(String name, String ssn, String gender) {
        this.name = name;
        this.ssn = ssn;
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    @Override
    public String toString() {
        String temp = (file==null)?"null":file.getOriginalFilename();
        return "Person{" +
                "name='" + name + '\'' +
                ", ssn='" + ssn + '\'' +
                ", gender='" + gender + '\'' +
                ", file=" + temp +
                '}';
    }
}
