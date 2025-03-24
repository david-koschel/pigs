package ulpgc.pigs.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import ulpgc.pigs.backend.enums.DietType;
import ulpgc.pigs.backend.enums.Preference;
import ulpgc.pigs.backend.util.AESConverter;

import java.util.Date;

@Getter
@Setter
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    @Convert(converter = AESConverter.class)
    private String password;

    @Convert(converter = AESConverter.class)
    private String email;

    @Convert(converter = AESConverter.class)
    private String phone;

    @Convert(converter = AESConverter.class)
    private String gender;

    @Convert(converter = AESConverter.class)
    private String genderPreference;

    @Convert(converter = AESConverter.class)
    private Date birthDate;

    @Convert(converter = AESConverter.class)
    private String location;

    @Convert(converter = AESConverter.class)
    @Enumerated(EnumType.STRING)
    private DietType dietType;

    @Convert(converter = AESConverter.class)
    @Enumerated(EnumType.STRING)
    private Preference preference;

    @Column(columnDefinition = "varchar(1024)")
    private String description;
}
