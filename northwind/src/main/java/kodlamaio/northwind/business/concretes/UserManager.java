package kodlamaio.northwind.business.concretes;

import kodlamaio.northwind.business.abstracts.UserService;
import kodlamaio.northwind.core.dataAccess.UserDao;
import kodlamaio.northwind.core.entities.User;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserManager implements UserService {

    private final UserDao userDao;

    @Override
    public Result add(User user) {
        return null;
    }

    @Override
    public DataResult<User> findByEmail(String email) {
        return null;
    }
}
