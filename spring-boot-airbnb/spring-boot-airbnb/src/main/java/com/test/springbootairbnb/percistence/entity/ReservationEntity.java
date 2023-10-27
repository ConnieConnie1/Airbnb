import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class ReservationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    // Proprietà 
    private Long idReservation;
    private Date checkIn;
    private Date checkOut;
    private Integer numeroOspiti;
    private Long idAlloggio;
    private String emailUtente;
    
}
