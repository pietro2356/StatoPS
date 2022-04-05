# Stato Pronto Soccorso Trentini

Applicazione web per la consultazione dello stato dei pronto soccorsi Trentini.

## Realizzazione
L'applicazione è realizzata in [Angular](https://angular.io/), con l'ausilio del design Material di Angular [Angular Material](https://angular.io/).

---

## Funzionamento
L'applicazione fornisce una tabella per pronto soccorso in questo modo:

![PSArco](./assets/StatoPSArco.png)

Per ogni pronto soccorso viene mostrato:
* Ospedale - Reparto.
* Codice reparto.
* Tabella per la consultazione dei codici.


## Come funziona l'accesso ai pronto soccorsi
Normalmente l'accesso ai pronto soccorsi trentini funziona in questo modo:

1. Arrivo del paziente(PZ) in pronto soccorso(PS).
2. Accettazione del PZ da parte dell'infermiera di Triage.
3. Assegnazione di un codice colore e di un identificativo.

Ora, in base alla lista **d'attesa** e al codice colore ricevuto si dovrà aspettare di essere chiamati dal Medico di PS o dall'infermiera di triage.

Una volta chiamati si entra in **osservazione**, dove vengono eseguiti accertamenti più accurati sulla persona da parte dell'infermiera di triage.

Dopo i vari accertamenti si passa in **ambulatorio** per essere visitati dal medico di PS. 


## Come leggere la tabella
Come potete notare nella prima colonna troviamo i vari codici colori, dal più grave ***Rosso***, al meno grave: ***Bianco***.

Le altre colonne si dividono nel seguente modo:
* Attesa:
    * Persone che hanno fatto l'accettazione in triage con l'infermiera di turno.
* Osservazione:
    * Persone che vengono chiamate dall'infermiera di triage per eseguire una visita più accurata, e identificare il problema.
* Ambulatorio:
    * Persone chiamate dal medico di PS o dall'infermiera di ambulatorio per la visita effettiva col medico.

> I tempi di attesa sono molto variabili, in basse alle esigenze di dei singoli.

## Codici colore
* ***Rosso***:
    * Visita immediata.
* ***Arancio***:
    * Visita con urgenza.
* ***Azzurro***:
    * Visita con urgenza differibile.
* ***Verde***:
    * Visita urgenza minore.
* ***Bianco***:
    * Visita non urgente.

---
## CORS
