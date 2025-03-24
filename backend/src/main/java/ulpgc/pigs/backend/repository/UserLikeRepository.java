package ulpgc.pigs.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ulpgc.pigs.backend.entity.UserLike;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface UserLikeRepository extends JpaRepository<UserLike, Long> {
    List<UserLike> findAllByRelationDateBefore(LocalDateTime relationDateBefore);
}
