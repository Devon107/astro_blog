import BaseLayout from '../layouts/BaseLayout.astro';
import { pageTitle, goal, identity, skills, happy, finished } from './about.astro';

<Fragment>
<BaseLayout pageTitle={pageTitle}>
{goal === 3 ? <Fragment><p>My goal is to finish in 3 days.</p></Fragment> : <Fragment><p>My goal is not 3 days.</p></Fragment>}
<h2>... !y mi nuevo sitio Astro!</h2>

<p>Estoy trabajanado en el tutorial de Astro. Esta es la segunda página de mi sitio web, !y es la primera que he construido!</p>

<p>Este sitio se irá actualizando a medida que vaya completando más partes del tutorial, ¡así que no dejes de visitarlo para ver cómo va mi viaje!</p>

<p>He aquí algunos datos sobre mí:</p>
<ul>
<li>Me llamo {identity.firstName}.</li>
<li>Vivo en {identity.country} y trabajo como {identity.occupation}.</li>
{identity.hobbies.length >= 2 &&
<Fragment><li>Dos de mis aficiones son: {identity.hobbies[0]} y {identity.hobbies[2]}</li></Fragment>}
</ul>
<p>Mis habilidades son:</p>
<ul>
{skills.map((skill) => <Fragment><li class="skill">{skill}</li></Fragment>)}
</ul>

{happy && <Fragment><p>¡Estoy feliz de aprender Astro!</p></Fragment>}

{finished && <Fragment><p>¡He terminado este tutorial!</p></Fragment>}

</BaseLayout>

</Fragment>;
