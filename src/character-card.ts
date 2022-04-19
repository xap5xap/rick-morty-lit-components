import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Maybe<T> = T | null;

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  // episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
};

@customElement('character-card')
export class CharacterCard extends LitElement {
  @property({type: Object})
  character?: Character = {};

  static override styles = css`
    .card {
      display: flex;
      flex-direction: row;
      border-radius: 5px;
      margin: 10px;
      background-color: rgb(60, 62, 68);
      color: white;
      overflow: hidden;
    }
    .imagen {
      img {
        opacity: 1;
        object-fit: cover;
        object-position: center center;
        width: 100%;
        height: 100%;
        display: block;
        padding: 0;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
    }
  `;

  override render() {
    if (!this.character) {
      return html``;
    }
    return html`
      <div class="card">
        <div class="imagen">
          <img
            src=${this.character.image || ''}
            alt=${this.character.name || ''}
          />
        </div>
        <div class="info">
          <div>${this.character.name}</div>
          <div>${this.character.status} - ${this.character.species}</div>
        </div>
      </div>
    `;
  }
}
