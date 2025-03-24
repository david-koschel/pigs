package ulpgc.pigs.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ulpgc.pigs.backend.entity.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByEmail(String email);
}
