# mymusic

Treść zadania:
1. Proszę napisać formularz dodawania kontrahenta, który zawiera:
* Imię
* Nazwisko
* Typ (Osoba lub Firma)
* Numer identyfikacyjny (jeśli osoba to Pesel lub jeśli firma to NIP)
* Zdjęcie (Podgląd ma wyświetlić po wybraniu pliku z dysku)

2. Formularz ma walidować dane Numeru identyfikacyjnego:
* Czy wprowadzono poprawny PESEL/ NIP

3. Zdjęcie:
* Format JPG/JPEG
* Acpect ratio 1:1 (zdjęcie w kwadracie)

Dodatkowo Submit Forma ma wykonać na końcówkę https://localhost:60001/Contractor/Save i być jako POST Oczywiście ta końcówka zwróci kod błędu 404 i ma się wyświetlić komunikat użytkownikowi "Nie znaleziono metody zapisu".
