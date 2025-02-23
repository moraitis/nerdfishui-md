'use client'

import * as React from 'react'
import {Combobox} from '@moraitis/ui'
import {Icons} from 'components/icons'

export function ComboboxDemo() {
  return (
    <Combobox
      name="framework"
      label="Framework"
      emptyString="No frameworks found"
      placeholder="Select a framework"
      items={[
        {value: 'next.js', label: 'Next.js', icon: Icons.ArrowRight},
        {value: 'sveltekit', label: 'SvelteKit'},
        {value: 'nuxt.js', label: 'Nuxt.js'},
        {value: 'remix', label: 'Remix'},
        {value: 'astro', label: 'Astro'},
        {value: 'blitz', label: 'Blitz'},
        {value: 'redwood', label: 'Redwood'},
        {value: 'vite', label: 'Vite'},
        {value: 'snowpack', label: 'Snowpack'},
      ]}
    />
  )
}
