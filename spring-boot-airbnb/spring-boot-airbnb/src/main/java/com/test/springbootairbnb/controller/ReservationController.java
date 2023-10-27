import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @PostMapping
    public Reservation insertReservation(@RequestBody Reservation reservation) {
        // Inserire una nuova prenotazione nel database
        return reservationRepository.save(reservation);
        // Inserire nel DB
    }

    @GetMapping("/{id}")
    public Reservation getReservation(@PathVariable Long id) {
        // Implementa la logica per ottenere una prenotazione in base all'ID
        return reservationRepository.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        // Implementa la logica per cancellare una prenotazione in base all'ID
        reservationRepository.deleteById(id);

        // Elimino dal DB
    }
}
