CREATE TABLE event
(
    id            BIGINT AUTO_INCREMENT NOT NULL,
    `description` VARCHAR(4095) NULL,
    date_time     datetime NULL,
    location      VARCHAR(255) NULL,
    max_attendees INT NOT NULL,
    privacy       VARCHAR(255) NULL,
    user_id       INT NULL,
    CONSTRAINT pk_event PRIMARY KEY (id)
);

CREATE TABLE event_cooking_categories
(
    event_id           BIGINT NOT NULL,
    cooking_categories VARCHAR(255) NULL
);

ALTER TABLE event
    ADD CONSTRAINT FK_EVENT_ON_USER FOREIGN KEY (user_id) REFERENCES user (id);

ALTER TABLE event_cooking_categories
    ADD CONSTRAINT fk_event_cookingcategories_on_event FOREIGN KEY (event_id) REFERENCES event (id);