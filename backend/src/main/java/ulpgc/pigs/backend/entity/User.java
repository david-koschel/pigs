package ulpgc.pigs.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;
import ulpgc.pigs.backend.enums.DietType;
import ulpgc.pigs.backend.enums.Preference;

import java.util.Date;

@Getter
@Setter
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    private String username;

    @NotNull
    private String password;

    private String email;

    private String phone;

    private String gender;

    private String genderPreference;

    private Date brithDate;

    private String location;

    private DietType dietType;

    private Preference preference;

    private String description;
}
