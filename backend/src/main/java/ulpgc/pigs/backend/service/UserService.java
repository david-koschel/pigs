package ulpgc.pigs.backend.service;

import org.springframework.stereotype.Service;
import ulpgc.pigs.backend.entity.User;
import ulpgc.pigs.backend.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    // Constructor
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public java.util.List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Integer id) {
        // Ojo a la conversión de Integer a Long, ya que tu repo usa Long
        Optional<User> userOpt = userRepository.findById(Long.valueOf(id));
        return userOpt.orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Integer id, User userDetails) {
        Optional<User> userOpt = userRepository.findById(Long.valueOf(id));
        if (userOpt.isPresent()) {
            User existingUser = userOpt.get();
            existingUser.setUsername(userDetails.getUsername());
            existingUser.setPassword(userDetails.getPassword());
            existingUser.setEmail(userDetails.getEmail());
            existingUser.setPhone(userDetails.getPhone());
            existingUser.setGender(userDetails.getGender());
            existingUser.setGenderPreference(userDetails.getGenderPreference());
            existingUser.setBirthDate(userDetails.getBirthDate());
            existingUser.setLocation(userDetails.getLocation());
            existingUser.setDietType(userDetails.getDietType());
            existingUser.setPreference(userDetails.getPreference());
            existingUser.setDescription(userDetails.getDescription());
            return userRepository.save(existingUser);
        } else {
            return null;
        }
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(Long.valueOf(id));
    }
}

