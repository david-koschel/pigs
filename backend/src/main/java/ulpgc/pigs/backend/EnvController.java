package ulpgc.pigs.backend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class EnvController {

    @Value("${encryption.secret-key:NOT_FOUND}")
    private String secretKey;

    @GetMapping
    public String getSecretKey() {
        return "Clave de cifrado en Spring Boot: " + secretKey;
    }
}
