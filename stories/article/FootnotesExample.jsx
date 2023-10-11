import { Component } from 'react';

class FootnotesExample extends Component {
  render() {
    return (
      <div>
        <p>
          Når du pitcher, blir idéen og historien i den filmen du planlegger å lage, tydeligere for både deg selv og dem
          du eventuelt jobber sammen med i klassen.{' '}
          <span id="ref1" className="c-footnotes__ref">
            Målgruppen for Hansaspillet er både fastboende og turister. Pitching er også en god måte å bevisstgjøre seg
            selv på.{' '}
            <sup>
              <a href="#note1" target="_self">
                [1]
              </a>
            </sup>
          </span>
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          <span id="ref2" className="c-footnotes__ref">
            Forfatteren, komponisten og musikeren foreslo flere samarbeidsprosjekter for å løfte frem Munchs ukjente
            tekstarv.{' '}
            <sup>
              <a href="#note2" target="_self">
                [2]
              </a>
            </sup>
          </span>
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        {/*  ArticleFootNotes does not follow chicago style yet (because of missing metadata), but changes here should be reflected there.  */}
        {/* <ArticleFootNotes
          footNotes={[
            {
              ref: 1,
              title: 'Hanseatene kommer tilbake',
              publisher: 'Bergens Tidende',
              year: '11.05.2003',
              authors: ['Røyrane, Eva'],
              url:
                'http://www.bt.no/nyheter/lokalt/Hanseatene-kommer-tilbake-2419472.html',
            },
            {
              ref: 2,
              title: 'Ingen tok Ketil Bjørnstad på alvor.',
              publisher: 'Aftenposten',
              year: '25.01.2013',
              authors: ['Nærø, Sturle Scholz'],
            },
          ]}
        /> */}
        <ol className="c-footnotes">
          <li className="c-footnotes__item">
            <cite className="c-footnotes__cite" id="note1">
              <sup>
                <a href="#ref1" target="_self">
                  1
                </a>
              </sup>{' '}
              Røyrane, «Hanseatene kommer tilbake». Røyrane, Eva. «Hanseatene kommer tilbake.» Bergens Tidende.
              11.05.2003.{' '}
              <a href="http://www.bt.no/nyheter/lokalt/Hanseatene-kommer-tilbake-2419472.html">
                http://www.bt.no/nyheter/lokalt/Hanseatene-kommer-tilbake-2419472.html
              </a>
              .
            </cite>
          </li>
          <li className="c-footnotes__item">
            <cite className="c-footnotes__cite" id="note2">
              <sup>
                <a href="#ref2" target="_self">
                  2
                </a>
              </sup>{' '}
              Nærø, «Ketil Bjørnstad.» Nærø, Sturle Scholz. «Ingen tok Ketil Bjørnstad på alvor.» Aftenposten.
              25.01.2013.
            </cite>
          </li>
        </ol>
      </div>
    );
  }
}

export default FootnotesExample;
