package tutorial;

import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by leituo56 on 7/30/14.
 */
public class ExtendedMultipartResolver  extends CommonsMultipartResolver {



    @Override
    public boolean isMultipart(HttpServletRequest request) {
        if(request!=null) {
            String httpMethod = request.getMethod().toLowerCase();
            // test for allowed methods here...
            String contentType = request.getContentType();
            return (contentType != null && contentType.toLowerCase().startsWith("multipart"));
        }else {
            return false;
        }
    }


}
