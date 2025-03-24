package ulpgc.pigs.backend.controller;

import org.springframework.web.bind.annotation.*;
import ulpgc.pigs.backend.entity.User;
import ulpgc.pigs.backend.repository.UserRepository;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/new")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
