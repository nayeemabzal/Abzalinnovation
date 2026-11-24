(() => {
  const panel = document.querySelector('[data-atlas-demo]');
  if (!panel) return;
  const samples = {
    meadow: {
      label: 'A / MEADOW BASE DISTRICT',
      title: 'Community garden',
      copy: 'This fictional example lists a community garden as allowed in Meadow. The overlay may call for its own review.',
      source: 'Illustrative use table · Sample row A-04 · Demo revision 2026-11-22'
    },
    junction: {
      label: 'B / JUNCTION BASE DISTRICT',
      title: 'Neighborhood workshop',
      copy: 'This fictional example lists a small workshop as requiring extra review in Junction. The overlay may call for its own review.',
      source: 'Illustrative use table · Sample row B-07 · Demo revision 2026-11-22'
    }
  };
  const label = panel.querySelector('#atlas-result-label');
  const title = panel.querySelector('#atlas-result-title');
  const copy = panel.querySelector('#atlas-result-copy');
  const source = panel.querySelector('#atlas-result-source');
  const radios = Array.from(panel.querySelectorAll('input[name="atlas-district"]'));
  const update = () => {
    const radio = radios.find(option => option.checked);
    if (!radio || !Object.hasOwn(samples, radio.value)) {
      delete panel.dataset.atlasState;
      label.textContent = 'NO WORKING DISTRICT SELECTED';
      title.textContent = 'Start with A or B';
      copy.textContent = 'The working district sets the context for this sample use review. It does not change the parcel’s boundaries.';
      source.hidden = true;
      source.textContent = '';
      return;
    }
    const sample = samples[radio.value];
    panel.dataset.atlasState = radio.value;
    label.textContent = sample.label;
    title.textContent = sample.title;
    copy.textContent = sample.copy;
    source.textContent = sample.source;
    source.hidden = false;
  };
  for (const radio of radios) radio.addEventListener('change', update);
  update();
})();
