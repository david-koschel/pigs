package ulpgc.pigs.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import ulpgc.pigs.backend.enums.CookingCategory;
import ulpgc.pigs.backend.enums.EventPrivacy;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    private LocalDateTime dateTime;

    private String location;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<CookingCategory> cookingCategories;

    private int maxAttendees;

    @Enumerated(EnumType.STRING)
    private EventPrivacy privacy;
}
