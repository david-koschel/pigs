package ulpgc.pigs.backend;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import ulpgc.pigs.backend.repository.UserLikeRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Component
public class LikeScheduler {
    private final UserLikeRepository userLikeRepository;

    public LikeScheduler(UserLikeRepository userLikeRepository) {
        this.userLikeRepository = userLikeRepository;
    }

    @Scheduled(fixedRate = 1000 * 60, initialDelay = 0)
    private void unLikeProfiles() {
        LocalDateTime profileDelete = LocalDateTime.now().minusDays(15);
        userLikeRepository.deleteAll(userLikeRepository.findAllByRelationDateBefore(profileDelete));
    }
}
