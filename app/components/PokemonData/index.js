/**
 *
 * PokemonData
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Input, Select, message } from 'antd';

import { pokemonNatures } from 'utils/stubData';

import { Wrapper, Title, FormField, SaveBtn } from './css';

const { Option } = Select;

const defaultValue = {
  height: '',
  weight: '',
  gender: 'Male',
  nature: 'Hardy',
};

/* eslint-disable react/prefer-stateless-function, react/no-did-update-set-state */
class PokemonData extends React.PureComponent {
  state = {
    data: {
      ...defaultValue,
    },
  };

  componentDidUpdate(prevProps) {
    const { focusedPokemon } = this.props;
    const { focusedPokemon: prevFocus } = prevProps;
    if (focusedPokemon.name !== prevFocus.name) {
      this.setState({ data: { ...defaultValue, ...focusedPokemon } });
    }
  }

  saveChanges = () => {
    const { updatePokemon } = this.props;
    message.success('Successfully updated pokemon info');
    updatePokemon(this.state.data);
  };

  updateData = (key, value) => {
    const { data } = this.state;

    this.setState({
      data: {
        ...data,
        [key]: value,
      },
    });
  };

  render() {
    const { focusedPokemon } = this.props;
    const { height, weight, gender, nature } = this.state.data;

    return (
      <Wrapper>
        <Title>Pokemon Data</Title>
        {focusedPokemon.name && (
          <div>
            <FormField>NAME: {focusedPokemon.name}</FormField>
            <FormField>
              <Input
                placeholder="Height"
                style={{ width: 180, marginRight: 10 }}
                value={height}
                onChange={e => this.updateData('height', e.currentTarget.value)}
              />
              <Input
                placeholder="Weight"
                style={{ width: 180 }}
                value={weight}
                onChange={e => this.updateData('weight', e.currentTarget.value)}
              />
            </FormField>
            <FormField>
              <Select
                value={gender}
                style={{ width: 180, marginRight: 10 }}
                onChange={value => this.updateData('gender', value)}
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
              <Select
                value={nature}
                style={{ width: 180 }}
                onChange={value => this.updateData('nature', value)}
              >
                {pokemonNatures.map(pokeNature => (
                  <Option key={pokeNature} value={pokeNature}>
                    {pokeNature}
                  </Option>
                ))}
              </Select>
            </FormField>
          </div>
        )}
        {focusedPokemon.name && (
          <Popover content="Save changes">
            <SaveBtn onClick={this.saveChanges} />
          </Popover>
        )}
      </Wrapper>
    );
  }
}

PokemonData.propTypes = {
  focusedPokemon: PropTypes.object.isRequired,
  updatePokemon: PropTypes.func.isRequired,
};

export default PokemonData;
