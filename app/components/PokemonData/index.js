/**
 *
 * PokemonData
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Select, message } from 'antd';

import { pokemonNatures } from 'utils/stubData';

import { Wrapper, Title, FormField, SaveBtn } from './css';

const { Option } = Select;

const defaultValue = {
  gender: 'Male',
  nature: 'Hardy',
  moveSet1: '',
  moveSet2: '',
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
    const { focusedPokemon, updatePokemon } = this.props;
    message.success('Successfully updated pokemon info');
    updatePokemon({ ...focusedPokemon, ...this.state.data });
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

  renderPokeMoves = ({ move }, moveSet) => (
    <Option value={move.name} key={`${moveSet}-move`}>
      {move.name}
    </Option>
  );

  render() {
    const { focusedPokemon } = this.props;
    const { moveSet1, moveSet2, gender, nature } = this.state.data;

    return (
      <Wrapper>
        <Title>Pokemon Data</Title>
        {focusedPokemon.name && (
          <div className="form">
            <FormField>NAME: {focusedPokemon.name}</FormField>
            <FormField>
              <Select
                value={moveSet1}
                style={{ width: '45%', marginRight: 10 }}
                onChange={value => this.updateData('moveSet1', value)}
                showSearch
              >
                {focusedPokemon.moves.map(move =>
                  this.renderPokeMoves(move, 'select-1'),
                )}
              </Select>
              <Select
                value={moveSet2}
                style={{ width: '45%' }}
                onChange={value => this.updateData('moveSet2', value)}
                showSearch
              >
                {focusedPokemon.moves.map(move =>
                  this.renderPokeMoves(move, 'select-2'),
                )}
              </Select>
            </FormField>
            <FormField>
              <Select
                value={gender}
                style={{ width: '45%', marginRight: 10 }}
                onChange={value => this.updateData('gender', value)}
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
              <Select
                value={nature}
                style={{ width: '45%' }}
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
