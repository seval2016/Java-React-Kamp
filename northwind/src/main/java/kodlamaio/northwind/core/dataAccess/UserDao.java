package kodlamaio.northwind.core.dataAccess;

import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User,Integer> {
    User findByEmail(String email);
}
