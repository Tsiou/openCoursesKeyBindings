# openCoursesKeyBindings
Προσθέτει πλήκτρα για ευκολότερη χρήση των εκπαιδευτικών βίντεο της σελίδας [Open Courses](http://opencourses.uom.gr) του Πανεπιστημίου Μακεδονίας.

## Εγκατάσταση

1. Εγκατάσταση του [Tampermonkey](https://www.tampermonkey.net/) στον browser.
2. Δημιουργία καινούργιου script από το Tampermonkey.
3. Άνοιγμα του αρχείου [script.js](https://github.com/Tsiou/openCoursesKeyBindings/blob/master/script.js)
4. Αντιγραφή του περιεχομένου του script (Ctrl + A to επιλογή όλων, Ctrl + C αντιγραφή)
5. Επικόλληση στο ανοιχτό αρχείο στο Tampermonkey (Ctrl + A to επιλογή όλων, Ctrl + V επικόλληση).
6. Done. Ανοίγουμε την σελίδα [Open Courses](http://opencourses.uom.gr) για να ελέγξουμε ότι το script τρέχει σωστά.

#### Κατά το άνοιγμα της σελίδας [Open Courses](http://opencourses.uom.gr), αν εμφανίζεται στο εικονίδιο του Tampermonkey ο αριθμός 1 σημαίνει ότι το script είναι ενεργό.

## Χρήση

Το script προσθέτει μερικά απλά bindings στην σελίδα open courses για ευκολότερη διαχείριση, εμπνευσμένα γενικώς από τα αντίστοιχα keybinds του YouTube.
Συγκεκριμένα, τα νέα keybinds είναι:

#### Αριστερό/Δεξί βέλος

Κάνουν skip 5 δευτερόλεπτα πίσω/μπροστά, πιθανόν να χρειάζεται χρόνος για να τρέξει το βίντεο μέχρι εκείνο το σημείο.
Συνεχόμενο πάτημα των πλήκτρων συνεχίζει να προχωράει το βίντεο.

#### Space ή k

Κάνουν παύση αν το video παίζει, αλλιώς ξεκινάνε το video αν είναι σε παύση.
Το space είναι ήδη συνδεδεμένο με την ενεργοποίηση πλήρους οθόνης, και όταν πατηθεί βγάζει/βάζει το βίντεο σε λειτουργία πλήρης οθόνης. 
Προτείνεται η χρήση του πλήκτρου k για παύση/συνέχιση.

#### < και >

Αλλάζουν την ταχύτητα με την οποία παίζει το βίντεο κατά 10%.
Δηλαδή αν πατηθεί το > 2 φορές, το βίντεο θα παίζει σε ταχύτητα 120% της αρχικής.
