package ulpgc.pigs.backend;

public class TestEnv {
    public static void main(String[] args) {
        String secretKey = System.getenv("ENCRYPTION_SECRET_KEY");
        if (secretKey != null) {
            System.out.println("Clave de cifrado encontrada: " + secretKey);
        } else {
            System.out.println("ERROR: No se encontró la variable de entorno.");
        }
    }
}
