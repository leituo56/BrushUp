<%--
  Created by IntelliJ IDEA.
  User: leituo56
  Date: 6/18/14
  Time: 11:03 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Fb Page ${page.name}</title>
</head>
<body>
    <p>Name:${page.name}</p>
    <p>Likes: ${page.likes}</p>
    <p>About: ${page.about}</p>
    <p>Phone: ${page.phone}</p>
    <p>WebSite: <a href="${page.website}" target="_blank">${page.website}</a></p>
</body>
</html>
