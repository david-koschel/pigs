package ulpgc.pigs.backend.service;

import org.springframework.stereotype.Service;
import ulpgc.pigs.backend.CredentialDto;
import ulpgc.pigs.backend.entity.User;
import ulpgc.pigs.backend.entity.UserLike;
import ulpgc.pigs.backend.entity.UserLikeDto;
import ulpgc.pigs.backend.repository.UserLikeRepository;
import ulpgc.pigs.backend.repository.UserRepository;
import ulpgc.pigs.backend.util.AESConverter;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserLikeRepository userLikeRepository;

    // Constructor
    public UserService(UserRepository userRepository, UserLikeRepository userLikeRepository) {
        this.userRepository = userRepository;
        this.userLikeRepository = userLikeRepository;
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

    public User login(CredentialDto credentials) {
        List<User> byEmail = this.userRepository.findByEmail(credentials.getEmail());
        return byEmail.stream()
            .filter(u -> u.getPassword().equals(credentials.getPassword()))
            .findFirst().orElseThrow(() -> new RuntimeException("Incorrect Credentials"));
    }

    public User getUnlikedUser(int userId) {
        User logged = this.getUserById(userId);
        List<Integer> likedIds = logged.getLikedUsers().stream()
            .map(UserLike::getLikedUser)
            .map(User::getId)
            .collect(Collectors.toList());

        likedIds.add(userId);

        User user = userRepository.findByIdIsNotIn(likedIds).orElse(null);
        return user;
    }

    public void likeUser(int userId, UserLikeDto userLikeDto) {
        User logged = this.getUserById(userId);
        User likedUser = this.getUserById(userLikeDto.getUserId());

        UserLike userLike = new UserLike();
        userLike.setUser(logged);
        userLike.setLikedUser(likedUser);
        userLike.setLiked(userLikeDto.isLiked());
        userLikeRepository.save(userLike);
    }
}

