package ulpgc.pigs.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import ulpgc.pigs.backend.util.AESConverter;


@Getter
@Setter
@Entity
public class User {
    // Getters y Setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    @Convert(converter = AESConverter.class)
    private String email;  // Se almacena cifrado en la BD

    @Convert(converter = AESConverter.class)
    private String password;  // También cifrado

    public User() {}

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
