CREATE TABLE user
(
    id                INT AUTO_INCREMENT NOT NULL,
    username          VARCHAR(255)       NULL,
    password          VARCHAR(255)       NULL,
    email             VARCHAR(255)       NULL,
    phone             VARCHAR(255)       NULL,
    gender            VARCHAR(255)       NULL,
    gender_preference VARCHAR(255)       NULL,
    birth_date        VARCHAR(255)       NULL,
    location          VARCHAR(255)       NULL,
    diet_type         VARCHAR(255)       NULL,
    preference        VARCHAR(255)       NULL,
    description       VARCHAR(1024)      NULL,
    CONSTRAINT pk_user PRIMARY KEY (id)
);