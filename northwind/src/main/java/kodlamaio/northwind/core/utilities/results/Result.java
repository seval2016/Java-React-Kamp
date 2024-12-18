package kodlamaio.northwind.core.utilities.results;
import lombok.Getter;
import lombok.Setter;

@Getter
public class Result {
    private boolean success;
    private String message;

    public Result(boolean success) {
        this.success = success;
    }

    public Result(boolean success, String message) {
        this(success);
        this.message = message;
    }
}
