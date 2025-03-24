package ulpgc.pigs.backend.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLikeDto {
    private int userId;
    private boolean liked;
}
