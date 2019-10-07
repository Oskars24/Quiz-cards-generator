Live Demo: https://oskars24.github.io/Quiz-cards-generator/
# Quiz Cards Generator
![Podglad](https://lh3.googleusercontent.com/o_GPjvFgNDMFpFgvM4ssW_SJLpzCWxH-ma2OKrciNY2-VZvEwgqFLjOZllwR85cbabGBpb9t6Qa2)
#### Description (PL below):
The application allows you to create cards with your own questions for the quiz game, personalize their appearance and generate a pdf file ready for double-sided printing. Works 100% on the browser side.

#### Used technologies:
* HTML
* CSS
* JavaScript
* pdfmake

#### How it's working:
1) Download the repository or open https://oskars24.github.io/Quiz-cards-generator/ and go to step 3
2) Run the __index.html__ file
3) Enter the questions in the format given below and click the button __"Importuj pytania"__ (ie. "Import questions"):
```sh
['Question No. 1','Answer No. 1'], ['Question No. 2','Answer No. 2'], ...
```
4) In the next step, make sure that all questions and answers will fit on the card (too long questions will be highlighted in red). Then click __"Dalej"__ (ie. "Next")
5) Adjust the appearance as you like and click __"Generuj pdf"__ (ie. "Generate pdf")

#### Card personalization:
The application includes an extensive appearance editor. Most card elements can be changed. The preview is generated in the "Canvas" object and the changes appear in real time. However, due to the limitations of pdfmake, the final look may be slightly different. Personalization includes:
- __Category arrows__ (colors, border, glow)
- __Card background__ (color, opacity, rounded corners)
- __Card background border__ (width, color, opacity and others)
- __Table background__ (color, opacity, rounded corners)
- __Table background border__ (width, color, opacity and others)
- __Content__ (text color, table line color)
- __Images__ (left and right logo in back card)

___

#### Opis:
Aplikacja pozwala stworzyć karty z własnymi pytaniami do quizu, spersonalizować ich wygląd i wygenerować plik pdf gotowy do dwustronnego druku. Działa w 100% po stronie przeglądarki.

#### Wykorzystane technologie:
* HTML
* CSS
* JavaScript
* pdfmake

#### Uruchamianie:
1) Pobierz repozytorium lub wejdź na https://oskars24.github.io/Quiz-cards-generator/ i przejdź do kroku 3
2) Uruchom plik __index.html__
3) Wprowadź pytania w formacie podanym poniżej i kliknij przycisk __"Importuj pytania"__:
```sh
['Pytanie nr 1','Odpowiedź nr 1'], ['Pytanie nr 2','Odpowiedź nr 2'], ...
```
4) W następnym kroku sprawdź czy wszystkie pytania i odpowiedzi zmieszczą się na karcie (zbyt długie pytania zostaną podświetlone na czerwono). Nastepnie kliknij __"Dalej"__
5) Dopasuj wyglą do swoich potrzeb i kliknij __"Generuj pdf"__.

#### Persnalizacja kart:
Aplikacja zawiera rozbudowany edytor wyglądu. Zmienić można większość elementów karty. Podgląd generowany jest w obiekcie "Canvas" i zmiany ukazują sięw czasie rzeczyststym. Natomiast ze względu na ograniczenia pdfmake finalny wygląd może się minimalnie różnić. Personalizacja obejmuje między innymi:
- __Strzałki kategorii__ (kolory, obrys, podświetlenie)
- __Tło karty__ (kolor, krycie, zaokrąglenie narożników)
- __Obramowanie tła karty__ (grubość, kolor, krycie i inne)
- __Tło tabeli__ (kolor, krycie, zaokrąglenie narożników)
- __Obramowanie tła tabeli__ (grubość, kolor, krycie i inne)
- __Kontent__ (kolor tekstu, kolor linii tabeli)
- __Obrazy__ (lewe i prawe logo tylnej karty)
