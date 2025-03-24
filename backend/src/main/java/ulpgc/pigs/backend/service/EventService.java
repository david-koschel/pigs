package ulpgc.pigs.backend.service;

import org.springframework.stereotype.Service;
import ulpgc.pigs.backend.entity.Event;
import ulpgc.pigs.backend.repository.EventRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEventById(Long id) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        return optionalEvent.orElse(null);
    }

    public Event updateEvent(Long id, Event eventDetails) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        if (optionalEvent.isPresent()) {
            Event existingEvent = optionalEvent.get();
            existingEvent.setDescription(eventDetails.getDescription());
            existingEvent.setDateTime(eventDetails.getDateTime());
            existingEvent.setLocation(eventDetails.getLocation());
            existingEvent.setCookingCategories(eventDetails.getCookingCategories());
            existingEvent.setMaxAttendees(eventDetails.getMaxAttendees());
            existingEvent.setPrivacy(eventDetails.getPrivacy());
            return eventRepository.save(existingEvent);
        }
        return null;
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
