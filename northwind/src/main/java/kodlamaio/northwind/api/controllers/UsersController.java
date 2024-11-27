package kodlamaio.northwind.api.controllers;

import kodlamaio.northwind.business.abstracts.UserService;
import kodlamaio.northwind.core.entities.User;
import kodlamaio.northwind.core.utilities.results.ErrorDataResult;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/users")
@AllArgsConstructor
public class UsersController {

    private final UserService userService;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody User user) {
        return ResponseEntity.ok(userService.add(user));
    }

    /**
     *
     * @ExceptionHandler:  Bu anotasyon, belirtilen türdeki bir istisna fırlatıldığında ilgili metodu çalıştırır. Burada, MethodArgumentNotValidException yakalanıyor. Bu istisna genellikle, @Valid veya @Validated ile doğrulama yapılırken bir hata oluştuğunda fırlatılır.
     * @ResponseStatus(HttpStatus.BAD_REQUEST): Metodun döndürdüğü HTTP yanıtının durum kodunu belirler. Burada, 400 Bad Request döndürülüyor, çünkü doğrulama hataları genellikle istemci hatasıdır.
     * MethodArgumentNotValidException exceptions:MethodArgumentNotValidException, doğrulama hatalarını içeren bir istisnadır. İçerisinde hatalar hakkında detaylı bilgiler bulunur.
     * getBindingResult(): Form veya API'ye gelen istek üzerindeki tüm doğrulama hatalarını döner.
     * getFieldErrors(): Hatalı alanların listesine ulaşır.
     * fieldError.getField(): Hata alınan alanın adını döner. Örneğin: username, password.
     * fieldError.getDefaultMessage(): Alan için tanımlanan hata mesajını döner. Örneğin: "Bu alan boş bırakılamaz".
     * Bu işlem sonucunda, hatalı alanları ve hata mesajlarını içeren bir Map (validationErrors) oluşturulur.
     *
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorDataResult<Object> handleValidationException
            (MethodArgumentNotValidException exceptions) {
        Map<String, String> validationErrors = new HashMap<String, String>();
        for (FieldError fieldError : exceptions.getBindingResult().getFieldErrors()) {
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }

        ErrorDataResult<Object> errors
                = new ErrorDataResult<Object>(validationErrors, "Doğrulama hataları");
        return errors;
    }

}
