package ulpgc.pigs.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ulpgc.pigs.backend.entity.User;
import ulpgc.pigs.backend.entity.UserLikeDto;
import ulpgc.pigs.backend.service.UserService;

@RestController
@RequestMapping("/api/like")
public class LikeController {

    private final UserService userService;

    public LikeController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/{userId}")
    public void likeUser(@PathVariable int userId, @RequestBody UserLikeDto userLikeDto) {
        userService.likeUser(userId, userLikeDto);
    }

    @GetMapping("/unliked/{userId}")
    public User unLikedUser(@PathVariable int userId) {
        return userService.getUnlikedUser(userId);
    }
}
