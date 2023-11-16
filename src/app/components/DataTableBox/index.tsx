import React from 'react'
import get from 'lodash/get'
import upperCase from 'lodash/upperCase'
import { useTranslation } from 'react-i18next'

interface IProps {
  height: number
  weight: number
  abilities: Object[]
  shape: string
}

const DataTableBox: React.FC<IProps> = (props) => {
  const { height, weight, abilities, shape } = props
  const { t } = useTranslation(['common'])

  return (
    <div>
      <table>
        <div>
          <div>
            <div>
              <div>{t('common:abilities')}</div>
            </div>
            <div>
              <div>
                {abilities.map((ability) => {
                  const abilityName = upperCase(get(ability, ['ability', 'name']))
                  return (
                    <div
                      key={abilityName}
                      //text={`${abilityName}`}
                      //position="middle"
                    />
                  )
                })}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>{t('common:height')}</div>
            </div>
            <div>
              <div>{height} m</div>
            </div>
          </div>
          <div>
            <div>
              <div>{t('common:weight')}</div>
            </div>
            <div>
              <div>{weight} Kg</div>
            </div>
          </div>
          <div>
            <div>
              <div>{t('common:shape')}</div>
            </div>
            <div>
              <div>{shape}</div>
            </div>
          </div>
        </div>
      </table>
    </div>
  )
}

export default DataTableBox
