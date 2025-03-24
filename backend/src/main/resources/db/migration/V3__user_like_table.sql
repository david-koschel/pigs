CREATE TABLE user_like
(
    id            BIGINT AUTO_INCREMENT NOT NULL,
    user_id       INT                   NULL,
    liked_user_id INT                   NULL,
    liked         BIT(1)                NOT NULL,
    relation_date datetime              NULL,
    CONSTRAINT pk_userlike PRIMARY KEY (id)
);

CREATE TABLE user_liked_users
(
    user_id        INT NOT NULL,
    liked_users_id INT NOT NULL
);

ALTER TABLE user_like
    ADD CONSTRAINT FK_USERLIKE_ON_LIKED_USER FOREIGN KEY (liked_user_id) REFERENCES user (id);

ALTER TABLE user_like
    ADD CONSTRAINT FK_USERLIKE_ON_USER FOREIGN KEY (user_id) REFERENCES user (id);

ALTER TABLE user_liked_users
    ADD CONSTRAINT fk_uselikuse_on_likedusers FOREIGN KEY (liked_users_id) REFERENCES user (id);

ALTER TABLE user_liked_users
    ADD CONSTRAINT fk_uselikuse_on_user FOREIGN KEY (user_id) REFERENCES user (id);