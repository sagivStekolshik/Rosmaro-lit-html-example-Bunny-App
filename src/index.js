import { html, render } from 'lit-html'
import graph from './graph.json'
import litRosamro from './lit-rosamro'
import handlers from './handlers/all'

litRosamro({ graph, handlers })