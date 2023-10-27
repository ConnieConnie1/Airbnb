create database airbnb;
USE AIRBNB;
show databases;

CREATE TABLE ALLOGGI(
ID INT AUTO_INCREMENT PRIMARY KEY);

CREATE TABLE HOST (
ID INT AUTO_INCREMENT PRIMARY KEY,
NOME VARCHAR(50),
ID_ALLOGGIO INT,
DESCRIZIONE VARCHAR(300),
CONTATTO_MAIL VARCHAR(50)
);



ALTER TABLE ALLOGGI 
ADD NOME VARCHAR(50),
ADD REGIONE VARCHAR(50),
ADD CITTA VARCHAR(50),
ADD DESCRIZIONE VARCHAR(500),
ADD HOST_ID INT,
ADD NUM_MAX_OSPITI INT,
ADD NUM_LETTI INT,
ADD NUM_BAGNI INT,
ADD PREZZO_BASE_NOTTE long;

CREATE TABLE UTENTE (
ID INT AUTO_INCREMENT PRIMARY KEY,
NOME VARCHAR(50),
COGNOME VARCHAR(50),
MAIL VARCHAR(50),
NUM_TEL long,
NUM_DOCUMENTO VARCHAR(20)
);


CREATE TABLE RECENSIONI (
ID INT AUTO_INCREMENT PRIMARY KEY,
ID_ALLOGGIO INT,
ID_UTENTE INT,
TESTO_RECENSIONE VARCHAR(300));



CREATE TABLE PRENOTAZIONI (
ID INT AUTO_INCREMENT PRIMARY KEY,
ID_ALLOGGIO INT,
ID_UTENTE INT,
DATA_INIZIO date,
DATA_FINE date,
PREZZO_FINALE int
);

CREATE TABLE SERVIZI (
ID INT AUTO_INCREMENT PRIMARY KEY,
ID_ALLOGGIO INT,
CUCINA BOOLEAN,
PARCHEGGIO BOOLEAN,
BALCONE BOOLEAN,
FRIGORIFERO BOOLEAN,
WIFI BOOLEAN,
GIARDINO BOOLEAN,
ANIMALI_AMMESSI BOOLEAN,
FORNO BOOLEAN,
ASCIUGACAPELLI BOOLEAN,
TV BOOLEAN,
LAVATRICE BOOLEAN,
ARIA_CONDIZIONATA BOOLEAN,
ACCESSO_SPIAGGIA BOOLEAN,
VISTA_MONTAGNA BOOLEAN
);

# POPOLO LA TABELLA ALLOGGI
INSERT INTO `airbnb`.`alloggi` ( `NOME`, `REGIONE`, `CITTA`, `DESCRIZIONE`, `HOST_ID`, `NUM_MAX_OSPITI`, `NUM_LETTI`, `NUM_BAGNI`, `PREZZO_BASE_NOTTE`) 
VALUES ('Container Suite: sospeso tra terra e mare', 'Sicilia', 'Terrasini', 'Uno scrigno sofisticato, accogliente, immerso nella natura e dall’inconfondibile stile.\n\nSituato a Terrasini, in una meravigliosa valle affacciata sulla costa del Golfo di Castellammare, Container Suite, circondato da una rigogliosa distesa di fichi d’india, si integra nel paesaggio in perfetta armonia con il territorio circostante.\n\nDal design unico, si contraddistingue per una grande vetrata sul golfo che proietta l’ospite in una modalità di sospensione.', '1', '2', '1', '1', '175'),
VALUES ('Dimora Natura-Riserva Naturale Valle di Bondo', 'Lombardia', 'Brescia', 'Natura è ciò che siamo. Soggiornare nella Riserva Naturale Valle di Bondo, tra ampi prati e verdi boschi che dominano il lago di Garda, è armonia. Lontani dalla folla, a 600m di altitudine, ma vicini alle sue spiagge, solo 9km, Tremosine sul Garda regala panorami mozzafiato, una cultura contadina e tanto sano sport. Pet-friendly significa che accettiamo gli animali, ma soprattutto che li amiamo.', '2', '4', '2', '1', '190'),
VALUES ('Montegufoni 19b', 'Toscana', 'Montegufoni', '2° Piano: piccolo soggiorno con accesso alla cucina con tavolo da pranzo, bagno con doccia, camera singola con bagno privato con doccia, camera matrimoniale, camera con 2 letti singoli.\nIl Castello di Montegufoni è un luogo esclusivo in cui potete trascorrere meravigliose vacanze all\'insegna del relax e della quiete.\nRisalente all’anno  e ristrutturato nel  dalla nobile famiglia degli Acciaioli, presenta una magnifica torre costruita sul modello architettonico di Palazzo Vecchio a Firenze.', '3', '5', '4', '2', '120'),
VALUES ('Trullo del 1800 in Valle d\'Itria', 'Puglia', 'Brindisi', 'A Cisternino, all\'interno di una caratteristica aia immersa nella Valle d\'Itria, fa capolino questo intimo complesso di trulli risalenti al 1800, ristrutturati secondo la tradizione. Un posto magico dove trascorrere una vacanza all\'insegna del relax.', '4', '5', '4', '1', '120'),
VALUES ('Casa ANUR a un passo dal Mare', 'Sicilia', 'Bagheria', 'ncastonata tra le rocce di Mongerbino ed una ricca vegetazione mediterranea sorge Casa Anur, dall\'arabo \"Luce\".\nAcqua dai colori caraibici e una impareggiabile visuale sul golfo di Palermo, vi permetteranno di trascorrere le vostre vacanze in pieno relax ed armonia.\nUna serie di calette, insenature, piccole grotte e faraglioni vi attendono per praticare pesca subacquea, snorkeling, sup.', '5', '3', '2', '1', '105'),
VALUES ('CHALET BOSCO - RELAX - Piscina - colli Piacentini', 'Emilia Romagna','Piacenza', 'Relax e Natura in questo Chalet di legno circondato da un immenso bosco, a due passi da Castell’Arquato, nella stupenda cornice dei Colli Piacentini.\nMeta ideale per chi vuole fuggire dalla frenesia della città, la casa si trova a un’ora di macchina da Milano e 40 minuti da Piacenza.\nLo Chalet nel Bosco è perfetto per una fuga romantica in coppia o per un soggiorno in famiglia, per godere dei benefici che la natura offre, in una location unica e suggestiva, immersa in un meraviglioso uliveto.', '6', '4', '2','1', '180'),
VALUES('7','Isola Falconera - Il Casone', 'Veneto', 'Cavallino', '7', '16', '18','3',  '60')
VALUES('8', 'SUITE APPARTAMENTO NAXI SUITES', 'Sardegna', 'Cagliari', 'Goditi una vacanza all\'insegna dello stile in questo spazio nel centro storico di Cagliari.',  '8',  '4', '2', '2', '250'),
VALUES('9','Mirror House Sud', 'Trentino Alto Adige', 'Bolzano', 'Mirror Houses sono due casette immerse in uno stupendo scenario di meleti appena fuori a, nei meravigliosi dintorni delle Dolomiti altoatesine.\nLe Mirror Houses offrono un’occasione unica per trascorrere una stupenda vacanza circondati da architettura contemporanea dei più alti standard a stretto contatto con uno tra i più suggestivi paesaggi che la natura possa offrire.', '9', '4', '1', '1', '220'),
VALUES('10','Tenuta Piana 2: accesso diretto al mare', 'Sicilia', 'Marina di Caronia', 'A soli pochi metri dal mare, inebriati dall’odore degli agrumi, dove il cinguettio degli uccelli insieme al rumore del mare rappresentano la musica di sottofondo sorge Tenuta Piana: un complesso composto da tre appartamenti indipendenti fra loro.\n\nCaratteristiche Uniche:\n- accesso diretto al mare\n- immersi in un limoneto\n- camera matrimoniale con letto a baldacchino + cameretta per i bambini\n- spazio dedicato per lavorare da remoto in giardino\n- patio privato\n- diverse zone relax nel giardino', '10', '2', '4', '1', '95'),
VALUES('11', 'La Casa dei Libri, chic e con Vista sulla città', 'Toscana', 'Firenze', 'La Casa dei Libri è un delizioso appartamento, con bellissima TERRAZZA CONDOMINIALE con vista su Firenze! Ristrutturato, e dotato di ogni comfort: WiFi, Aria Condizionata, Netflix. Posizione strategica, dove è possibile parcheggiare l\'auto facilmente. A soli 5 minuti a piedi dalla Tramvia e 15 minuti a piedi dall\'inizio del centro storico; vicino al Visarno, alle Cascine, Polimoda, Leopolda e Maggio Musicale.',  '11',  '4', '1', '1', '110'),
VALUES('12', 'Rilassati ora di fronte a Lago di Como', 'Lombardia', 'Como', 'My accommodation is close to beautiful panoramic views. My accommodation is suitable for couples, adventurers, loners and families (with children). But the best thing I can offer my house is the SPA and JACUZZI, absolutely gorgeous! I would like to point out, in this description, the JACUZZI, the indoor pool and SPA, are communal, and therefore available to all guests.\nThe outdoor pool, JACUZZI, is open from 15 April until 15 October.',  '11', '4', '2','1',  '160'),
VALUES ('14', 'Migliore vista sul Colosseo in un loft di lusso', 'Lazio', 'Roma', 'L\'unico palazzo esclusivo e di lusso che si affaccia sul Foro Romano con una vista aperta sulla Roma antica, proprio come nelle foto. Ideale per viaggi romantici, per 1 coppia + 1 bambino, per viaggi d\'affari (WiFi veloce e gratuito). È possibile bere vino di fronte a un tramonto indimenticabile, fare colazione/cena con una vista unica.', '14', '2', '1', '1', '180');


#POPOLO LA TABELLA RECENSIONI
INSERT INTO RECENSIONI (ID_ALLOGGIO, ID_UTENTE, TESTO_RECENSIONE)
VALUES
(1, 1, 'Questo alloggio è stato fantastico! Tutto era pulito e ben curato. Il padrone di casa è stato molto cordiale e disponibile.'),
(2, 2, 'Soggiorno meraviglioso in un luogo incantevole. Non vedo l\'ora di tornarci!'),
(1, 3, 'L\'alloggio ha superato le mie aspettative. La vista era mozzafiato.'),
(3, 4, 'Ottima esperienza! La struttura è bellissima e ben tenuta.'),
(4, 5, 'Siamo stati benissimo in questo trullo. Atmosfera magica e relax garantito.'),
(2, 6, 'Un paradiso per gli amanti della natura. Non volevamo andarcene.'),
(5, 7, 'Casa Anur è il posto perfetto per una vacanza rilassante. Ci torneremo sicuramente.'),
(6, 8, 'Abbiamo trascorso un weekend fantastico nello chalet nel bosco. Tanta tranquillità e aria fresca.'),
(7, 9, 'Isola Falconera è un paradiso segreto. Il Casone è spazioso e offre una vista panoramica spettacolare.'),
(8, 10, 'La suite Naxi è un gioiello nel cuore di Cagliari. Perfetta per una fuga romantica.'),
(9, 11, 'Mirror House Sud è stata una scelta eccellente per la nostra vacanza. Architettura moderna in mezzo alla natura.'),
(10, 12, 'Tenuta Piana 2 offre un accesso diretto al mare e un limoneto incantevole. Non volevamo più andare via!'),
(11, 13, 'La Casa dei Libri è un appartamento chic con una vista incredibile su Firenze. Posizione perfetta per esplorare la città.'),
(12, 14, 'Una vacanza rilassante a Como. La spa e il jacuzzi sono stati il massimo del lusso.'),
(13, 15, 'Positano è un sogno e questa casa ha reso il nostro soggiorno ancora più speciale.'),
(14, 16, 'La vista sul Colosseo dal loft è spettacolare. Perfetto per una fuga romantica.'),
(5, 17, 'Casa Anur è un luogo magico per rilassarsi e godersi il mare cristallino. Torneremo sicuramente.'),
(3, 18, 'Montegufoni 19b è un vero gioiello storico. Abbiamo apprezzato il nostro soggiorno e la vista dalla torre era mozzafiato.'),
(4, 19, 'Il nostro soggiorno nel Trullo del 1800 è stato un viaggio nel tempo. Atmosfera unica e suggestiva.'),
(1, 20, 'Container Suite è il luogo perfetto per una fuga romantica. La vetrata con vista sul golfo è spettacolare.'),
(2, 21, 'Dimora Natura-Riserva Naturale Valle di Bondo è immersa nella natura. Perfetta per gli amanti del trekking.'),
(6, 22, 'Lo chalet nel bosco è stato un rifugio perfetto dalla frenesia della città. La piscina è un plus.'),
(7, 23, 'Isola Falconera - Il Casone è un vero paradiso per gli amanti della natura. Abbiamo visto molte specie di uccelli.'),
(8, 24, 'Suite Appartamento Naxi Suites è una chicca nel centro storico di Cagliari. Design moderno e confort.'),
(9, 25, 'Mirror House Sud è stata una scoperta sorprendente. Le viste sulle Dolomiti sono spettacolari.'),
(10, 26, 'Tenuta Piana 2 è il luogo perfetto per chi ama il mare e la natura. Relax garantito.'),
(11, 27, 'La Casa dei Libri offre una vista unica su Firenze. Ideale per gli amanti dell\'arte e della cultura.');

#POPOLO TABELLA UTENTE
INSERT INTO UTENTE (NOME, COGNOME, MAIL, NUM_TEL, NUM_DOCUMENTO)
VALUES
('Matteo', 'Marini', 'matteo.marini@mail.com', 3511234567, 'AB123456'),
('Sophie', 'Müller', 'sophie.muller@mail.com', 4919876543, 'CD789012'),
('Lucas', 'Dupont', 'lucas.dupont@mail.com', 3315551234, 'EF234567'),
('Elena', 'Andersen', 'elena.andersen@mail.com', 4478901234, 'GH345678'),
('Anton', 'Sokolov', 'anton.sokolov@mail.com', 5564445556, 'IJ456789'),
('Marta', 'García', 'marta.garcia@mail.com', 3466665555, 'KL567890'),
('Marco', 'Conti', 'marco.conti@mail.com', 3932223334, 'MN678901'),
('Sophia', 'Weber', 'sophia.weber@mail.com', 4917778889, 'OP789012'),
('Lukas', 'Schneider', 'lukas.schneider@mail.com', 4361112223, 'QR890123'),
('Alessia', 'Ricci', 'alessia.ricci@mail.com', 4919998887, 'ST901234'),
('Pierre', 'Dubois', 'pierre.dubois@mail.com', 3365555555, 'UV012345'),
('Zara', 'Ali', 'zara.ali@mail.com', 4937777777, 'WX123456'),
('Leon', 'Kovács', 'leon.kovacs@mail.com', 3666666666, 'YZ234567'),
('Lara', 'Bianchi', 'lara.bianchi@mail.com', 4964444444, 'AA345678'),
('Hugo', 'Novak', 'hugo.novak@mail.com', 3461111111, 'BB456789'),
('Amélie', 'Dufresne', 'amelie.dufresne@mail.com', 4978888888, 'CC567890'),
('Alessandro', 'Moreau', 'alessandro.moreau@mail.com', 3942222222, 'DD678901'),
('Nina', 'Lund', 'nina.lund@mail.com', 4533333333, 'EE789012'),
('Giulia', 'Müller', 'giulia.muller@mail.com', 4915555555, 'FF901234'),
('Thomas', 'Dubois', 'thomas.dubois@mail.com', 4959999999, 'GG012345');

#POPOLO TABELLA PRENOTAZIONI
# DATEDIFF calcola la differenza tra due date.

INSERT INTO Prenotazioni (ID_ALLOGGIO, ID_UTENTE, DATA_INIZIO, DATA_FINE, PREZZO_FINALE)
VALUES
(1, 1, '2023-11-01', '2023-11-07', DATEDIFF('2023-11-07', '2023-11-01') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 1)),
(2, 2, '2023-12-15', '2023-12-22', DATEDIFF('2023-12-22', '2023-12-15') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 2)),
(3, 3, '2023-10-05', '2023-10-10', DATEDIFF('2023-10-10', '2023-10-05') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 3)),
(4, 4, '2024-01-20', '2024-01-27', DATEDIFF('2024-01-27', '2024-01-20') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 4)),
(5, 5, '2023-11-10', '2023-11-16', DATEDIFF('2023-11-16', '2023-11-10') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 5)),
(6, 6, '2024-02-05', '2024-02-12', DATEDIFF('2024-02-12', '2024-02-05') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 6)),
(7, 7, '2024-03-01', '2024-03-07', DATEDIFF('2024-03-07', '2024-03-01') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 7)),
(8, 8, '2023-12-22', '2023-12-29', DATEDIFF('2023-12-29', '2023-12-22') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 8)),
(9, 9, '2023-10-15', '2023-10-22', DATEDIFF('2023-10-22', '2023-10-15') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 9)),
(10, 10, '2024-04-03', '2024-04-10', DATEDIFF('2024-04-10', '2024-04-03') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 10)),
(11, 11, '2023-11-03', '2023-11-10', DATEDIFF('2023-11-10', '2023-11-03') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 11)),
(12, 12, '2024-02-15', '2024-02-22', DATEDIFF('2024-02-22', '2024-02-15') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 12)),
(13, 13, '2024-05-12', '2024-05-19', DATEDIFF('2024-05-19', '2024-05-12') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 13)),
(14, 14, '2024-03-10', '2024-03-17', DATEDIFF('2024-03-17', '2024-03-10') * (SELECT PREZZO_BASE_NOTTE FROM ALLOGGI WHERE ID = 14));

# POPOLO LA TABELLA SERVIZI

-- Alloggio 1: Container Suite: sospeso tra terra e mare
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1);

-- Alloggio 2: Dimora Natura-Riserva Naturale Valle di Bondo
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0);

-- Alloggio 3: Montegufoni 19b
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (3, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0);

-- Alloggio 4: Trullo del 1800 in Valle d'Itria
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0);

-- Alloggio 5: Casa ANUR a un passo dal Mare
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (5, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1);

-- Alloggio 6: CHALET BOSCO - RELAX - Piscina - colli Piacentini
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (6, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0);

-- Alloggio 7: Isola Falconera - Il Casone
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (7, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1);

-- Alloggio 8: SUITE APPARTAMENTO NAXI SUITES
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (8, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0);

-- Alloggio 9: Mirror House Sud
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (9, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0);

-- Alloggio 10: Tenuta Piana 2: accesso diretto al mare
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (10, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0);

-- Alloggio 11: La Casa dei Libri, chic e con Vista sulla città
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (11, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0);

-- Alloggio 12: Rilassati ora di fronte a Lago di Como
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (12, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0);

-- Alloggio 14: Migliore vista sul Colosseo in un loft di lusso
INSERT INTO SERVIZI (ID_ALLOGGIO, CUCINA, PARCHEGGIO, BALCONE, FRIGORIFERO, WIFI, GIARDINO, ANIMALI_AMMESSI, FORNO, ASCIUGACAPELLI, TV, LAVATRICE, ARIA_CONDIZIONATA, ACCESSO_SPIAGGIA, VISTA_MONTAGNA)
VALUES (14, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0);


#POPOLO LA TABELLA HOST

INSERT INTO HOST (NOME, ID_ALLOGGIO, DESCRIZIONE, CONTATTO_MAIL)
VALUES
('Mario Rossi', 1, 'Sono il padrone di casa dell\'Alloggio 1, host dal 2020', 'mario.rossi@mail.com'),
('Anna Verdi', 2, 'Benvenuti nella mia Dimora Natura, host dal 2019', 'anna.verdi@mail.com'),
('Luigi Bianchi', 3, 'Un cordiale benvenuto al Castello di Montegufoni, host dal 2015', 'luigi.bianchi@mail.com'),
('Laura Gialli', 4, 'Sono lieto di ospitarvi nel Trullo del 1800, host dal 2018', 'laura.gialli@mail.com'),
('Giovanni Blu', 5, 'Benvenuti a Casa Anur!, host dal 2017', 'giovanni.blu@mail.com'),
('Elena Arancioni', 6, 'Relax e natura vi aspettano, host dal 2016', 'elena.arancioni@mail.com'),
('Carlo Verde', 7, 'Isola Falconera vi dà il benvenuto, host dal 2019', 'carlo.verde@mail.com'),
('Silvia Marroni', 8, 'Soggiornate nello stile a Cagliari, host dal 2020', 'silvia.marroni@mail.com'),
('Marco Fucsia', 9, 'Benvenuti alle Mirror Houses, host dal 2017', 'marco.fucsia@mail.com'),
('Linda Neri', 10, 'Tenuta Piana vi aspetta vicino al mare, host dal 2018', 'linda.neri@mail.com'),
('Roberto Azzurri', 11, 'La Casa dei Libri vi accoglie, host dal 2019', 'roberto.azzurri@mail.com'),
('Giulia Celesti', 12, 'Relax di fronte al Lago di Como, host dal 2021', 'giulia.celesti@mail.com'),
('Federico Rosa', 13, 'Siete i benvenuti nel mio alloggio, host dal 2022', 'federico.rosa@mail.com'),
('Paola Viola', 14, 'Un palazzo esclusivo con vista sul Colosseo, host dal 2020', 'paola.viola@mail.com'),
('Antonio Gialloblu', 15, 'Ospitalità in una posizione perfetta, host dal 2019', 'antonio.gialloblu@mail.com');

