import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DnD Forms',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en'
				},
				'es-mx': {
					label: 'Español',
					lang: 'es-MX'
				}
			},
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
				{
					label: 'Introduction',
					translations: {
						'es-MX': 'Introducción'
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{ 
							label: 'What is DnD Forms?',
							translations: {
								'es-MX': 'Que es DnD Forms?'
							}, 
							link: '/intro/what-is-dnd-forms/' 
						},
						{ 
							label: 'System Requirements',
							translations: {
								'es-MX': 'Requisitos del Sistema'
							}, 
							link: '/intro/system-requirements' 
						}
					],
				},
				{
					label: 'Forms',
					translations: {
						'es-MX': 'Formularios'
					},
					items: [
						{ 
							label: 'About Forms',
							translations: {
								'es-MX': 'Acerca de los Formularios'
							}, 
							link: '/forms/about-forms' 
						},
						{ 
							label: 'Overview of Form Builder',
							translations: {
								'es-MX': 'Creador de Formularios'
							}, 
							link: '/forms/form-builder' 
						},
						{ 
							label: 'Form Controls',
							translations: {
								'es-MX': 'Controles de Formulario'
							}, 
							link: '/forms/form-controls' 
						},
						{ 
							label: 'Control Settings',
							translations: {
								'es-MX': 'Configuración de Controles'
							}, 
							link: '/forms/control-settings' 
						},
						{ 
							label: 'Create Form',
							translations: {
								'es-MX': 'Crear un Formulario'
							}, 
							link: '/forms/create-form' 
						},
						{ 
							label: 'Open Form',
							translations: {
								'es-MX': 'Abrir un Formulario'
							}, 
							link: '/forms/open-form' 
						}
					]
				}
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
	image: {
		service: passthroughImageService()
	}
});
