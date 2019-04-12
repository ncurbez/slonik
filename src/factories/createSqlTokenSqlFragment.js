// @flow

import {
  ArrayTokenSymbol,
  SqlTokenSymbol,
  RawSqlTokenSymbol,
  IdentifierTokenSymbol,
  IdentifierListTokenSymbol,
  ValueListTokenSymbol,
  TupleTokenSymbol,
  TupleListTokenSymbol,
  UnnestTokenSymbol
} from '../symbols';
import {
  createArraySqlFragment,
  createIdentifierSqlFragment,
  createIdentifierListSqlFragment,
  createRawSqlSqlFragment,
  createSqlSqlFragment,
  createTupleListSqlFragment,
  createTupleSqlFragment,
  createUnnestSqlFragment,
  createValueListSqlFragment
} from '../sqlFragmentFactories';
import {
  UnexpectedStateError
} from '../errors';
import type {
  SqlTokenType,
  SqlFragmentType
} from '../types';

export default (token: SqlTokenType, greatestParameterPosition: number): SqlFragmentType => {
  if (token.type === SqlTokenSymbol) {
    // @see https://github.com/gajus/slonik/issues/36 regarding FlowFixMe use.
    // $FlowFixMe
    return createSqlSqlFragment(token, greatestParameterPosition);
  } else if (token.type === RawSqlTokenSymbol) {
    // $FlowFixMe
    return createRawSqlSqlFragment(token, greatestParameterPosition);
  } else if (token.type === IdentifierTokenSymbol) {
    // $FlowFixMe
    return createIdentifierSqlFragment(token);
  } else if (token.type === IdentifierListTokenSymbol) {
    // $FlowFixMe
    return createIdentifierListSqlFragment(token);
  } else if (token.type === ArrayTokenSymbol) {
    // $FlowFixMe
    return createArraySqlFragment(token, greatestParameterPosition);
  } else if (token.type === ValueListTokenSymbol) {
    // $FlowFixMe
    return createValueListSqlFragment(token, greatestParameterPosition);
  } else if (token.type === TupleTokenSymbol) {
    // $FlowFixMe
    return createTupleSqlFragment(token, greatestParameterPosition);
  } else if (token.type === TupleListTokenSymbol) {
    // $FlowFixMe
    return createTupleListSqlFragment(token, greatestParameterPosition);
  } else if (token.type === UnnestTokenSymbol) {
    // $FlowFixMe
    return createUnnestSqlFragment(token, greatestParameterPosition);
  }

  throw new UnexpectedStateError();
};
