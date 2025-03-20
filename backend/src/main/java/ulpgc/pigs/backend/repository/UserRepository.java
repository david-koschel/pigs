package ulpgc.pigs.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ulpgc.pigs.backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
