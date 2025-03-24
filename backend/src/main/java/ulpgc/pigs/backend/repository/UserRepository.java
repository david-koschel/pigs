package ulpgc.pigs.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ulpgc.pigs.backend.entity.User;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.id NOT IN :ids ORDER BY FUNCTION('RAND') LIMIT 1")
    Optional<User> findByIdIsNotIn(Collection<Integer> ids);
}
