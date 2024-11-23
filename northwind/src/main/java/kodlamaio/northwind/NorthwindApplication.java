package kodlamaio.northwind;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/**
 * Northwind Uygulaması - Giriş noktası.
 * Bu sınıf, Spring Boot uygulamasının çalıştırılmasını sağlar.
 */
@SpringBootApplication
public class NorthwindApplication {

	public static void main(String[] args) {
		// Uygulamanın başlatılması için ana metod
		SpringApplication.run(NorthwindApplication.class, args);
	}

}
